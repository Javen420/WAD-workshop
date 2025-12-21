import mongoose from "mongoose";

const userProfileSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    
    birthday: {
      type: Date,
      required: true,
    },

    favoriteColor: {
      type: String,
      default: null
    },

    hobbies: {
      type: [String],
      default: []
    },

    favoriteFoods: {
      type: [String],
      default: []
    },

  },
);

export default mongoose.model("UserProfile", userProfileSchema);
