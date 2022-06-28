const CategoryRepository = require('../repositories/CategoryRepository')

class CategoryController {
  async index (request, response) {
    const category = await CategoryRepository.findAll()
    response.json(category)
  }

  async store (request, response) {
    const { name } = request.body

    if (!name) {
      return response.status(404).json({ error: "Name is Required" })
    }

    const category = await CategoryRepository.create({ name })
    response.json(category)
  }

  async show (request, response) {
    const { id } = request.params
    const categoryExists = await CategoryRepository.findById(id)

    if (!categoryExists) {
      return response.status(400).json({ error: "Category not found" })
    }
    response.json(categoryExists)
  }

  async delete (request, response) {
    const { id } = request.params
    const deleteOp = await CategoryRepository.delete(id)

    response.json(deleteOp)
  }

  async update (request, response) {
    const { id } = request.params
    const { name } = request.body

    const categoryExists = await CategoryRepository.findById(id)

    !categoryExists && response.status(400).json({ error: "Category is not found" })
    !name && response.status(400).json({ error: "Name is Required" })

    const category = await CategoryRepository.update(id, { name })
    response.json(category)
  }
}

module.exports = new CategoryController()
