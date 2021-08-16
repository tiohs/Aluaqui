import mongoose from 'mongoose';

const ImovelSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    descrition: {
      type: String,
      required: true,
    },
    Compartimento : {
      type: String,
      required: true,
    },
    localization : {

    },

  },
  { timestamps: true }
);

export default mongoose.model('Imovel', ImovelSchema);
