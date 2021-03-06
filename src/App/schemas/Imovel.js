import mongoose from 'mongoose';

const ImovelSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    quarto : {number : Number, d : [Number]},
    wc: {number : Number, d : [Number]},
    sala: {number : Number, d : [Number]},
    cozinha: {number : Number, d : [Number]},
    quintal: {number : Number, d : [Number]},
    descrition: {
      type: String,
      required: true,
    },
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
    photo : {
      type : [String]
    },
    location : {
      cord : [Number]
    },
    dimensao : {
      type : [Number],
      required: true,
    }
    ,
    idUser : {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

export default mongoose.model('Imovel', ImovelSchema);
