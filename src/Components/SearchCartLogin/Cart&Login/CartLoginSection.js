import React from "react";

export const CartLoginSection = () => {
  return (
    <div>
      <div className="cart_login-wrapper">
        <i className="fas fa-shopping-cart "></i>
        <i className="fas fa-user"></i>
        <form>
          <input type="submit" value="Iniciar Sesion" />
        </form>
      </div>
    </div>
  );
};
