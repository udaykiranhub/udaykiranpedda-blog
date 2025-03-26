import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { IconButton } from "@mui/material";
import { Menu, X, Home, Code, Shield, Book, Layers, User } from "lucide-react";
import { Link } from "react-router-dom";

function NavBar() {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      style={{
        backgroundColor: "white",
        padding: "12px 20px",
      }}
      variant="dark"
    >
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand
          as={Link}
          to="/udaykiranpedda-blog"
          style={{
            color: "black",
            fontSize: "22px",
            fontWeight: "bold",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            textDecoration: "none",
          }}
        >
          {/* <Home size={20} />  */}Uday Kiran Pedda
        </Navbar.Brand>

        {/* Toggle Button for Mobile */}
        <IconButton
          onClick={() => setExpanded(expanded ? false : "expanded")}
          style={{ color: "#000" }} // Changed to black for better visibility
          className="d-lg-none"
        >
          {expanded ? <X size={28} /> : <Menu size={28} />}
        </IconButton>

        {/* Navbar Links */}
        <Navbar.Collapse>
          <Nav className="ms-auto">
            {[
              { path: "/", label: "Home", icon: <Home size={20} /> },
              // { path: "/skills", label: "Skills", icon: <Code size={20} /> },
              { path: "/auditing", label: "Auditing", icon: <Shield size={20} /> },
              { path: "/protocols", label: "Protocols", icon: <Layers size={20} /> },
              { path: "/projects", label: "Projects", icon: <Book size={20} /> },
              { path: "/profile", label: "Profile", icon: <User size={20} /> },
            ].map(({ path, label, icon }) => (
              <Nav.Link
                key={path}
                as={Link}
                to={path}
                onClick={() => setExpanded(false)}
                style={{
                  color: "black",
                  fontSize: "18px",
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  textDecoration: "none",
                  padding: "8px 15px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#ccc")}
                onMouseLeave={(e) => (e.target.style.color = "#000")} // Changed to black for better visibility
              >
                {icon} {label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;