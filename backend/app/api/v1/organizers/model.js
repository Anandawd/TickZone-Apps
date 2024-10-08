const mongoose = require("mongoose");
const { model, Schema } = mongoose;

let organizerSchema = Schema(
  {
    organizer: {
      type: String,
      minlength: [3, "Panjang nama penyelenggara minimal 3 karakter"],
      maxlength: [20, "Panjang nama penyelenggara minimal 20 karakter"],
      required: [true, "Nama penyelenggara harus diisi"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Organizer", organizerSchema);
