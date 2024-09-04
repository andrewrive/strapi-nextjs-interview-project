const { getVideoDurationInSeconds } = require("get-video-duration");

async function handleAddVideoDuration(event) {
  const videoMediaId = event.params.data.video;
  const videoFile = await strapi.plugins.upload.services.upload.findOne(
    videoMediaId
  );
  const videoUrl = `${process.env.API_BASE}${videoFile.url}`;

  let durationInMinutes = 0;
  try {
    const duration = await getVideoDurationInSeconds(videoUrl);
    durationInMinutes = Math.ceil(duration / 60);
  } catch (err) {}

  event.params.data.duration = durationInMinutes;
}

module.exports = {
  beforeCreate: handleAddVideoDuration,
  beforeUpdate: handleAddVideoDuration,
};
