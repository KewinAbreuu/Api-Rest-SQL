const ContactRepository = require('../repositories/ContactRepository')

class ContactController {
  async index (request, response) {
    const Contacts = await ContactRepository.findAll()
    response.json(Contacts)
  }

  async show (request, response) {
    const { id } = request.params
    const contact = await ContactRepository.findById(id)

    if (!contact) {
      response.status(404).json({ Error: 'User Not Found' })
    }
    response.json(contact)
  }

  async store (request, response) {
    const { id, name, email, phone, category_id } = request.body
    // Validar campo name
    if (!name) {
      return response.status(400).json({ Error: 'Name is required' })
    }
    // Validar se ja tem um email igual cadastrado
    const contactExists = await ContactRepository.findByEmail(email)
    if (contactExists) {
      return response.status(400).json({ Error: 'Email already Exists' })
    }
    // Se passar nas validações, cria um novo usuario
    const contact = await ContactRepository.create({
      id, name, email, phone, category_id
    })
    response.json(contact)
  }

  async update (request, response) {
    const { id } = request.params
    const { name, email, phone, category_id } = request.body
    // Verifica sem existe esse usuario
    const contactExists = await ContactRepository.findById(id)
    if (!contactExists) {
      return response.status(400).json({ Error: 'User not Found' })
    }
    // Verifica sem o campo nome está vazio
    if (!name) {
      return response.status(400).json({ Error: 'Name is Required' })
    }
    // Verifica se ja tem um email igual cadastrado
    const contactByEmail = await ContactRepository.findByEmail(email)
    if (contactByEmail && contactByEmail.id !== id) {
      return response.status(400).json({ Error: 'Email already' })
    }
    // Se passar nas verificações ele faz o update
    const contact = await ContactRepository.update(id, { name, email, phone, category_id })
    response.json(contact)
  }

  async delete (request, response) {
    const { id } = request.params
    // Verifica se esse usuario existe
    const contactExists = await ContactRepository.findById(id)
    if (!contactExists) {
      return response.status(400).json({ Error: 'User not Found' })
    }
    await ContactRepository.delete(id)
    response.sendStatus(204)
  }
}

module.exports = new ContactController()
