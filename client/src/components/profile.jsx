import React from "react";
import { Container, Card } from "react-bootstrap";
import {
  Linkedin,
  Github,
  Twitter,
  Mail,
  Phone,
  MapPin,
  School,
  Send,
} from "lucide-react";

function Profile() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ minHeight: "100vh", padding: "10%" }}
    >
      <Card
        style={{
          width: "100%",
          maxWidth: "450px",
          padding: "30px",
          borderRadius: "12px",
          border: "none",
          background: "white",
          boxShadow: "0px 0px 20px 10px rgb(125, 122, 122)",
        }}
      >
        <Card.Body className="text-center">
          <h2
            style={{
              marginBottom: "10%",
              color: "#2c3e50",
              fontWeight: "600",
              fontSize: "28px",
              fontFamily: "cursive",
            }}
          >
            Uday Kiran Pedda
          </h2>

          <div
            style={{
              marginBottom: "24px",
              color: "#555",
              fontSize: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px" }}>
              <School size={20} color="#555" />
              <span>B.Tech in Computer Science</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginTop: "8px" }}>
              <MapPin size={20} color="#555" />
              <span>India</span>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "16px",
              textAlign: "left",
              padding: "0 10%",
            }}
          >
            <a
              href="https://www.linkedin.com/in/uday-kiran-pedda-65aa73271"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#2c3e50" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Linkedin size={20} color="#0A66C2" />
                <span>LinkedIn</span>
              </div>
            </a>

            <a
              href="https://github.com/udaykiranhub?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#2c3e50" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Github size={20} color="#333" />
                <span>GitHub</span>
              </div>
            </a>

            <a
              href="https://x.com/Udaykir03362466"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#2c3e50" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Twitter size={20} color="#1DA1F2" />
                <span>Twitter</span>
              </div>
            </a>

            <a
              href="https://t.me/udaykiranpedda"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "#2c3e50" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Send size={20} color="#0088CC" />
                <span>Telegram</span>
              </div>
            </a>

            <a
              href="mailto:peddaudaykiran1@gmail.com"
              style={{ textDecoration: "none", color: "#2c3e50" }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <Mail size={20} color="#D44638" />
                <span>peddaudaykiran1@gmail.com</span>
              </div>
            </a>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <Phone size={20} color="#25D366" />
              <span>+91 6305355185</span>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Profile;