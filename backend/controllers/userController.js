import User from "../models/User.js";
import Roadmap from "../models/Roadmap.js";

export const getProfile = async (req, res) => {
  try {

    const user = await User.findById(req.user.id).select("-password");

    const roadmap = await Roadmap.findOne({
      user: req.user.id,
    });

    let completed = 0;
    let total = 0;
    let progress = 0;

    if (roadmap) {
      total = roadmap.topics.length;

      completed = roadmap.topics.filter(
        (t) => t.completed
      ).length;

      progress =
        total > 0
          ? Math.round((completed / total) * 100)
          : 0;
    }

    res.json({
      user,
      stats: {
        completed,
        total,
        pending: total - completed,
        progress,
      },
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};