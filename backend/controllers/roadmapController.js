import Roadmap from "../models/Roadmap.js";

// Create Roadmap
export const createRoadmap = async (req, res) => {
  try {
    const { goal } = req.body;

    if (!goal) {
      return res.status(400).json({
        message: "Goal is required",
      });
    }

    const topics = [
      { title: "Python", completed: false },
      { title: "NumPy", completed: false },
      { title: "Pandas", completed: false },
      { title: "Matplotlib", completed: false },
      { title: "Statistics", completed: false },
      { title: "Machine Learning", completed: false },
      { title: "Deep Learning", completed: false },
      { title: "NLP", completed: false },
      { title: "Computer Vision", completed: false },
      { title: "Generative AI", completed: false },
      { title: "Projects", completed: false },
      { title: "Deployment", completed: false },
    ];

    const roadmap = await Roadmap.create({
      user: req.user.id,
      goal,
      topics,
    });

    res.status(201).json(roadmap);
  } catch (error) {
    console.log("Create Roadmap Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Get User Roadmap
export const getRoadmap = async (req, res) => {
  try {
    const roadmap = await Roadmap.findOne({
      user: req.user.id,
    });

    if (!roadmap) {
      return res.status(404).json({
        message: "No roadmap found",
      });
    }

    res.json(roadmap);
  } catch (error) {
    console.log("Get Roadmap Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};

// Update Topic Status
export const updateTopicStatus = async (req, res) => {
  try {
    const { roadmapId, topicIndex } = req.body;

    const roadmap = await Roadmap.findById(roadmapId);

    if (!roadmap) {
      return res.status(404).json({
        message: "Roadmap not found",
      });
    }

    roadmap.topics[topicIndex].completed = true;

    await roadmap.save();

    res.json({
      message: "Topic Completed Successfully",
      roadmap,
    });
  } catch (error) {
    console.log("Update Topic Error:", error);

    res.status(500).json({
      message: error.message,
    });
  }
};