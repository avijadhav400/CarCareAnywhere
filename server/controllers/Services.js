import Service from "../models/Service.js";

const postService = async(req, res) => {
  const { name, email, modelName, issue, user, date } = req.body;

  const service = new Service({
    name: name,
    email: email,
    modelName: modelName,
    issue: issue,
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
