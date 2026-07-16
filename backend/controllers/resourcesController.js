import resources from "../data/resources.js";

export const getResources = async (req, res) => {
  try {

    const { topic } = req.params;

    res.json(resources[topic] || {});

  } catch (err) {

    res.status(500).json({
      message: err.message
    });

  }
};