import { AppBar, Container, Toolbar, Typography } from "@mui/material";

const navbarLink = [
     { name: "Accueil", path: "" },
     { name: "Apprendre", path: "" },
     { name: "Actualité", path: "" },
     { name: "Connexion", path: "" },
];

export default function Navbar() {
     return (
          <AppBar color="primary" elevation={1} position="fixed" sx={{zIndex : (theme) => theme.zIndex.drawer + 1}}>
               <Container>
                    <Toolbar
                         sx={{
                              display: "flex",
                              flexDirection: "row",
                              alignContent: "center",
                              justifyContent: "space-between",

                         }}
                    >
                         <Typography variant={"h5"}>
                              <b>Voting App</b>
                         </Typography>
                         <div
                              style={{
                                   display: "flex",
                                   alignContent: "center",
                              }}
                         >
                              {navbarLink.map((item, key) => (
                                   <Typography
                                        key={key}
                                        style={{
                                             margin: "0vh 1vh",
                                             cursor: "pointer",
                                        }}
                                   >
                                        {item.name}
                                   </Typography>
                              ))}
                         </div>
                    </Toolbar>
               </Container>
          </AppBar>
     );
}
