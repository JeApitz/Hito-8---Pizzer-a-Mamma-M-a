import React from "react";
import { Card, CardText } from "react-bootstrap";

export const Logout = () => {
  return (
    <Card style={{ maxWidth: 400, margin: "auto", marginTop: 20 }}>
      <CardText variant="h5" component="div" gutterBottom>
        Sesión Cerrada
      </CardText>
      <CardText variant="body2" color="textSecondary">
        ¡Hemos cerrado tu sesión exitosamente!
      </CardText>
      <CardText variant="body2" color="textSecondary" style={{ marginTop: 10 }}>
        Si necesitas volver a acceder, por favor inicia sesión de nuevo.
      </CardText>
    </Card>
  );
};
