// We assume 200 words per minute
const WORDS_PER_MINUTE = 200;

function handleCalculateReadTime(event) {
  if (event.params.data.body) {
    event.params.data.read_time = Math.ceil(
      event.params.data.body.split(" ").length / WORDS_PER_MINUTE
    );
  }
}

module.exports = {
  beforeCreate: handleCalculateReadTime,
  beforeUpdate: handleCalculateReadTime,
};
