import Item from '../models/Item';
import User from '../models/User';

class ItemController {
  async store(req, res) {
    req.body.user_id = req.userId;
    
    const { id, name, description, user_id } = await Item.create(req.body);

    return res.json({
      id,
      name,
      description,
      user_id,
    });
  }

  async index(req, res) {
    const item = await Item.findAll({
      attributes: ['id', 'name', 'description', 'user_id'],
      order: [
        ['id', 'DESC'],
      ],
    });

    return res.json(item);
  }

  async delete(req, res) {
    console.log(req.params.id);

    const item = await Item.destroy({ where: { id: req.params.id } });

    return res.json(item);
  }
  
}

export default new ItemController();