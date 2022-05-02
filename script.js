// const getData = () => (
//   fetch('./data.json')
//     .then(response => response.json())
//     .then(content => content)
// )
//https://youtu.be/JDj5QGefetM

function dateClick(period) {
  //let data = getData()
  switch (period) {
    case "day":
      workHours.innerHTML = "5hrs";
      previousWorkHours.innerHTML = "Last Day - 7hrs";
      playHours.innerHTML = "1hrs";
      previousPlayHours.innerHTML = "Last Day - 2hrs";
      studyHours.innerHTML = "0hrs";
      previousStudyHours.innerHTML = "Last Day - 1hrs";
      exerciseHours.innerHTML = "1hrs";
      previousExerciseHours.innerHTML = "Last Day - 1hrs";
      socialHours.innerHTML = "1hrs";
      previousSocialHours.innerHTML = "Last Day - 3hrs";
      selfCareHours.innerHTML = "0hrs";
      previousSelfCareHours.innerHTML = "Last Day - 1hrs";
      break;
    case "week":
      workHours.innerHTML = "32hrs";
      previousWorkHours.innerHTML = "Last Week - 36hrs";
      playHours.innerHTML = "10hrs";
      previousPlayHours.innerHTML = "Last Week - 8hrs";
      studyHours.innerHTML = "4hrs";
      previousStudyHours.innerHTML = "Last Week - 7hrs";
      exerciseHours.innerHTML = "4hrs";
      previousExerciseHours.innerHTML = "Last Week - 5hrs";
      socialHours.innerHTML = "5hrs";
      previousSocialHours.innerHTML = "Last Week - 10hrs";
      selfCareHours.innerHTML = "2hrs";
      previousSelfCareHours.innerHTML = "Last Week - 2hrs";
      break;
    case "month":
      workHours.innerHTML = "103hrs";
      previousWorkHours.innerHTML = "Last Month - 128hrs";
      playHours.innerHTML = "23hrs";
      previousPlayHours.innerHTML = "Last Month - 29hrs";
      studyHours.innerHTML = "13hrs";
      previousStudyHours.innerHTML = "Last Month - 19hrs";
      exerciseHours.innerHTML = "11hrs";
      previousExerciseHours.innerHTML = "Last Month - 18hrs";
      socialHours.innerHTML = "21hrs";
      previousSocialHours.innerHTML = "Last Month - 23hrs";
      selfCareHours.innerHTML = "7hrs";
      previousSelfCareHours.innerHTML = "Last Month - 11hrs";
      break;
    default:
      console.log("Período inexistente, escolha um habilitado, por favor.");
  }
}