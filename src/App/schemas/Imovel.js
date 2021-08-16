import mongoose from 'mongoose';

const ImovelSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    quarto : Number,
    // descrition: {
    //   type: String,
    //   required: true,
    // },
    OtherCompartiment : {
      type: [{ name : String, number : Number }],
      required: true,
    },
    // provincia : {
    //   type: String,
    //   required: true,
    // },
    // municipio : {
    //   type: String,
    //   required: true,
    // },
    // location : {
    //   cord : [String]
    // }
    
  },
  { timestamps: true }
);

export default mongoose.model('Imovel', ImovelSchema);
