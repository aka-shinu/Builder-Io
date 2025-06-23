const axios = require("axios");

const API_KEY = "bpk-94d9fbcef57f45f6a9f8f783ef202646"; // Generate a Private API Key in Builder Admin
const MODEL_ID = "blog-posts";
const SPACE_ID = "3ba394995b8d4656826ee87fc507b982";

async function createEntry(i) {
  const title = `Blog Post #${i}`;
  const data = {
    image: "https://cdn.builder.io/api/v1/image/assets%2F3ba394995b8d4656826ee87fc507b982%2Fc424edc2e43c47b587da19a444f4c553",
    title,
    description: `This is blog post number ${i}.`,
    bottomdata: [
      {
        authorImage:
          "https://cdn.builder.io/api/v1/image/assets%2F3ba394995b8d4656826ee87fc507b982%2F981e9979ac154b05a34f61c5c87b20fd",
        authorName: "Bernd Holbein",
        category: "insight",
        time: 12,
      },
    ],
  };
  try{
      const res = await axios.post(
        `https://builder.io/api/v1/write/${SPACE_ID}/model/${MODEL_ID}/entry`,
        {
          name: title,
          data,
          published: true,
        },
        {
          headers: {
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );
  }
  catch(err){
    console.log(err.response.data, "err");
  }
  console.log(`✅ Created: ${title}`);
}

(async () => {
  for (let i = 1; i <= 10; i++) {
    await createEntry(i);
    break
  }
})();
