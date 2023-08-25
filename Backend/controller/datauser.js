const { findPatientById } = require("../models/data.model.js");

async function getDataByPatient(req, res) {
  const patientID = req.body.patient_id;

  const data = await finduserById(patientID);
  
  if (!data) return res.status(400).json({ message: "no data" });

  return res.status(200).json({ data: data });
}
module.exports = {
  getDataByPatient,
};
