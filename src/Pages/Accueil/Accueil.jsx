import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/api";

export default function Accueil({ user }) {
  const navigate = useNavigate();
  if (user.aud !== "authenticated") {
    navigate("/verification");
  }
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const dataFetch = async () => {
      let { data: user, error } = await supabase.from("user").select("idSkils");

      console.log(user, error);
    };
    dataFetch();
  });
  return <div>Accueil</div>;
}
