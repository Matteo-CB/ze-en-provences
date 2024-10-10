import mongoose from "mongoose";

const LogementSchema = new mongoose.Schema({
  nom: { type: String, required: true },
  adresse: { type: String, required: true },
  link: { type: String, required: true },
  ville: { type: String, required: true },
  code_postal: { type: Number, required: true },
  personnes: { type: Number, required: true },
  m2: { type: Number, required: true },
  equipements: { type: [String], required: true },
  description: { type: String, required: true },
  lits: { type: Number, required: true },
  images: { type: [String], required: true },
  airbnb: { type: String, required: true },
  livret_accueil: { type: String, required: true },
});

const Logement =
  mongoose.models.Logement || mongoose.model("Logement", LogementSchema);

export default Logement;
