document.addEventListener("DOMContentLoaded", function () {

    const usernameInput = document.getElementById('user-input');
    const searchButton = document.getElementById('search-btn');
    const statContainer = document.querySelector('.stats-container');
    const easyProgressCircle = document.querySelector('.easy-progress');
    const mediumProgressCircle = document.querySelector('.medium-progress');
    const hardProgressCircle = document.querySelector('.hard-progress');
    const easyLabel = document.getElementById('easy-label');
    const mediumLabel = document.getElementById('medium-label');
    const hardLabel = document.getElementById('hard-label');
    const cardStatContainers = document.querySelector(".stats-card");

    function validateUsername(username) {
        if (username.trim() === "") {
            alert("Username should not be Empty");
            return false;
        }
        const regex = /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/;
        const isMatching = regex.test(username);
        if (!isMatching) {
            alert("Invalid Useranme");
        }
        return isMatching;
    }


    async function fetchUserDetails(username) {
        // const url="https://alfa-leetcode-api.com/${username}";


        try {
            searchButton.textContent="Searching...";
            searchButton.disabled = true;
            // statContainer.style.setProperty("display",hidden);
            // statContainer.style.classList.add("hidden");
            
            const proxyUrl="https://cors-anywhere.herokuapp.com/";
            const targetUrl="https://leetcode.com/graphql/";

            const myHeaders = new Headers();
            myHeaders.append("content-type", "application/json");

            const graphql = JSON.stringify({
                query: "\n  query userSessionProgress($username: String!) {\n  allQuestionsCount {\n    difficulty\n    count\n  }\n  matchedUser(username: $username) {\n    submitStats {\n      acSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n      totalSubmissionNum {\n        difficulty\n        count\n        submissions\n      }\n    }\n  }\n}\n    ",
                variables: {username:username}
            })
            const option = {
                method: "POST",
                headers: myHeaders,
                body: graphql,
                redirect:"follow"
            };

            const response = await fetch(proxyUrl+targetUrl,option);
            console.log("User Details :" + username);

            if (!response.ok) {
                throw new Error("Unable to fetch user Details");
            }
            const parsedData = await response.json();
            console.log("User Details : ", parsedData);
            // console.log(parsedData.data);

            displayUserData(parsedData);
        }
        catch (error) {
            statContainer.innerHTML = `<p>${"Error:",error.message}</p>`;
        }
        finally {
            searchButton.textContent = "Search";
            searchButton.disabled = false;
        }

    }

    function updateProgress(solved, total, label, circle){
        const progressDegree=(solved/total)*100;
        // const progressDegree = total === 0 ? 0 : (solved / total) * 100;
        circle.style.setProperty("--progress-degree",`${progressDegree}%`);
        label.textContent=`${solved}/${total}`;
    } 

    function displayUserData(parsedData){        

        const totalQues=parsedData.data.allQuestionsCount[0].count;
        const totalEasyQues=parsedData.data.allQuestionsCount[1].count;
        const totalMediumQues=parsedData.data.allQuestionsCount[2].count;
        const totalHardQues=parsedData.data.allQuestionsCount[3].count;

        const solvedTotalQuestions=parsedData.data.matchedUser.submitStats.acSubmissionNum[0].count;
        const solvedTotalEasyQuestions=parsedData.data.matchedUser.submitStats.acSubmissionNum[1].count;
        const solvedTotalMediumQuestions=parsedData.data.matchedUser.submitStats.acSubmissionNum[2].count;
        const solvedTotalHardQuestions=parsedData.data.matchedUser.submitStats.acSubmissionNum[3].count;

        updateProgress(solvedTotalEasyQuestions, totalEasyQues, easyLabel,easyProgressCircle);
        updateProgress(solvedTotalMediumQuestions, totalMediumQues, mediumLabel,mediumProgressCircle);
        updateProgress(solvedTotalHardQuestions, totalHardQues, hardLabel,hardProgressCircle);

        const cardData=[
            { label:"Overall Submission",value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[0].submissions},
            { label:"Overall Easy Submission",value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[1].submissions},
            { label:"Overall Medium Submission",value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[2].submissions},
            { label:"Overall Hard Submission",value:parsedData.data.matchedUser.submitStats.totalSubmissionNum[3].submissions},
        ];
        console.log("Card Data : ",cardData);

        cardStatContainers.innerHTML=cardData.map(data=>
                `<div class="card">
                    <h3>${data.label}</h3>
                    <p>${data.value}</p>
                </div>`
        ).join("");

    }

    searchButton.addEventListener('click', function () {
        const username = usernameInput.value;
        console.log("Loggin username: ", username);
        if (validateUsername(username)) {
            fetchUserDetails(username);
        }
    })
});