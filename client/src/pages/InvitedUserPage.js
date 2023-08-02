import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const InvitedUserPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Function to fetch teamId and invitedUserId from the URL query parameters
    const getInvitedUserData = async () => {
      try {
        const params = new URLSearchParams(window.location.search);
        const teamId = params.get("teamId");
        const invitedUserId = params.get("invitedUserId");

        // Now, send the data to the backend endpoint
        const addInvitedUserEndpoint =
          "https://tnbolwcoaj.execute-api.us-east-1.amazonaws.com/prod/invite_user";

        const response = await fetch(addInvitedUserEndpoint, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            teamId: teamId,
            invitedUserId: invitedUserId,
          }),
        });

        // Check the response status to determine if the user was added successfully
        if (response.ok) {
          // Redirect the user to the BrowseGamePage after successful processing
          navigate("/browsegame");
        } else {
          // Handle any error or display an error message to the user
          console.error("Error adding invited user");
        }
      } catch (error) {
        console.error("Error fetching invited user data:", error);
      }
    };

    getInvitedUserData();
  }, [navigate]);

  return (
    <div>
      <h1>Processing Invitation...</h1>
    </div>
  );
};

export default InvitedUserPage;
