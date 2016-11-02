var data = {
  'asthma': {
    title: 'asthma',
    category: 'cronic',
    videoUrl: 'https://www.youtube.com/watch?v=tyZoOPILMgI',
    steps: ['1. Tarik Nafas', '2. Buang Nafas', '3. Bawa ke Rumah Sakit']
  }
};

function emergencyHandler (req, res) {
  if (req.params.type in data) {
    return res.status(200).send(data[req.params.type]);
  }
  return res.status(404);
}

module.exports = emergencyHandler;