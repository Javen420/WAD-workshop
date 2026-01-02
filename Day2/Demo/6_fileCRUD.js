//File CRUD Actions
const fs = require('fs/promises')

async function main(){
    // Utilize sleep to wait between actions
    // const sleep = () => new Promise((res,rej) => setTimeout(res, 2000));

    const data = await fs.readFile("profile_images/image.jpg");
 
    await fs.writeFile("profile_images/image_copy.jpg", data)
  
    await fs.rename("profile_images/image_copy.jpg", 
        "profile_images/new_image.jpg");
  
    await fs.rm("profile_images/image.jpg")
}


main();