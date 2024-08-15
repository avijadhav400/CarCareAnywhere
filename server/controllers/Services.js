import Service from "../models/Service.js";

const postService = async(req, res) => {
  const { name, email, carModel, serviceType, user, date } = req.body;

  const service = new Service({
    name: name,
    email: email,
    carModel: carModel,
    serviceType: serviceType,
    user: user,
    date: new Date(date),
  });

  try {
    const savedService = await service.save()
    res.json({
        success: true,
        message: 'Service added successfully',
        data: savedService
    })
  } catch (error) {
    res.json({
        success: false,
        message: error.message,
        data: null
    })
  }
};


export {postService}
