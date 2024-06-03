export const highLightsBg = ({ value }) => {
  let BgColor;

  switch (value) {
    case "Hike":
      BgColor = "#F4F1E6";
      break;
    case "Excursion":
      BgColor = "#FFC300";
      break;
    case "Local experiences":
      BgColor = "#D5D1EA";
      break;
    default:
      BgColor = "#D5D1EA";
  }

  return { BgColor };
};
export const sidebarBgs = ({ value }) => {
  let BgColor;
  let TextColor;
  switch (value) {
    case 0:
      BgColor = "#FFDA7F";
      TextColor = "#313131";
      break;
    case 1:
      TextColor = "#313131";
      BgColor = "#BBE4D7";
      break;
    case 2:
      TextColor = "#313131";
      BgColor = "#FCD9DF";
      break;
    case 3:
      TextColor = "#313131";
      BgColor = "#D9E4FC";
      break;
    case 4:
      TextColor = "#313131";
      BgColor = "#ECECFD";
      break;
    case 5:
      TextColor = "#ADADAD";
      BgColor = "#ECECFD";
      break;
    default:
      TextColor = "#313131";
      BgColor = "#FFDA7F";
  }
  return { BgColor, TextColor };
};
export const navbarLinksColors = ({ value }) => {
  let Color;
  switch (value) {
    case "Alumni (Soon)":
      Color = "#ADADAD";
      break;
    default:
      Color = "#313131";
  }
  return Color;
};
export const featuredEditionCardBgs = ({ value }) => {
  let BgColor1;
  let BgColor2;
  switch (value) {
    case 0:
      BgColor1 = "#dfd4ad";
      BgColor2 = "#ffc300";
      break;
    case 1:
      BgColor1 = "#ffda7f";
      BgColor2 = "#ffc300";
      break;
    case 2:
      BgColor1 = "#ececfd";
      BgColor2 = "#d9e4fc";
      break;
    case 3:
      BgColor1 = "#bbe4d7";
      BgColor2 = "#ff9500";
      break;
    case 4:
      BgColor1 = "#fcd9df";
      BgColor2 = "#d9e4fc";
      break;
    case 5:
      BgColor1 = "#ffc300";
      BgColor2 = "#ffda7f";
      break;
    case 6:
      BgColor1 = "#d5d1ea";
      BgColor2 = "#ff9500";
      break;
    case 7:
      BgColor1 = "#fc8b99";
      BgColor2 = "#ffda7f";
      break;
    case 8:
      BgColor1 = "#80ceb7";
      BgColor2 = "#d9e4fc";
      break;
    default:
      BgColor1 = "#BBE4D7";
      BgColor2 = "#BBE4D7";
  }
  return { BgColor1, BgColor2 };
};
export const featuredBlogsBgs = ({ item }) => {
  let BgColor;
  let name = item.btnheading;
  switch (name) {
    case (name = "Remote Life"):
      BgColor = "#BBE4D7";
      break;
    case (name = "Travel Tips"):
      BgColor = "#D9E4FC";
      break;
    case (name = "Alum-News"):
      BgColor = "#FFDA7F";
      break;

    default:
      BgColor = "#BBE4D7";
  }
  return BgColor;
};
export const featuredBlogsBgs2 = ({ value }) => {
  let BgColor;
  switch (value) {
    case 0:
      BgColor = "#BBE4D7";
      break;
    case 1:
      BgColor = "#D9E4FC";
      break;
    case 2:
      BgColor = "#FFDA7F";
      break;
    case 3:
      BgColor = "#D5D1EA";
      break;
    default:
      BgColor = "#BBE4D7";
  }
  return BgColor;
};
export const accomodationCardBg = ({ value }) => {
  let BgColor;
  let TextColor;
  switch (value) {
    case 0:
      BgColor = "#bbe4d7";
      TextColor = "#313131";
      break;
    case 1:
      BgColor = "#313131";
      TextColor = "#F7F7F7";
      break;
    default:
      BgColor = "#BBE4D7";
      TextColor = "#313131";
  }
  return { BgColor, TextColor };
};
export const ProfileDataCardBg = ({ value }) => {
  let BgColor;
  switch (value) {
    case 0:
      BgColor = "#bbe4d7";
      break;
    case 1:
      BgColor = "#d9e4fc";
      break;
    default:
      BgColor = "#fff";
  }
  return BgColor;
};
export const HeroBtnBg = ({ value }) => {
  let BgColor;
  switch (value) {
    case 0:
      BgColor = "#f4f1e6";
      break;
    case 1:
      BgColor = "#d9e4fc";
      break;
    default:
      BgColor = "#f4f1e6";
  }
  return BgColor;
};
