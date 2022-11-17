const funcionAsincronica = async () => {
  try {
    let user = await fetch("user.json");
    user = await user.json();
    const url = `https://api.github.com/users/${user.name}`;
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);

    const $img = document.createElement("img");
    $img.src = await data.avatar_url;

    document.body.append($img);
  } catch (error) {
    console.log(error);
  }
};
funcionAsincronica();
