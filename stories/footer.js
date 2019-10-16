import React from "react";
import { storiesOf } from "@storybook/react";

import Footer from "../src/components/Footer";

import SocialNav from "../src/components/SocialNav";
import FacebookIcon from "../src/icons/images/Facebook";
import TwitterIcon from "../src/icons/images/Twitter";
import InstagramIcon from "../src/icons/images/Instagram";

const footerItems = [
    {
      title: "Jobin",
      children: [
        {
          title: "Sobre Nosotros",
          link: "#"
        },
        {
          title: "Únete al equipo",
          link: "#"
        },
        {
          title: "Jobin Business",
          link: "#"
        },
        {
          title: "Prensa",
          link: "#"
        },
        {
          title: "Magazine",
          link: "#"
        }
      ]
    },
    {
      title: "Jobin",
      children: [
        {
          title: "Sobre Nosotros",
          link: "#"
        },
        {
          title: "Únete al equipo",
          link: "#"
        },
        {
          title: "Jobin Business",
          link: "#"
        },
        {
          title: "Prensa",
          link: "#"
        },
        {
          title: "Magazine",
          link: "#"
        }
      ]
    },
    {
      title: "Particulares",
      children: [
        {
          title: "Servicios que ofrecemos",
          link: "#"
        },
        {
          title: "Recibir presupuestos",
          link: "#"
        },
        {
          title: "Precio cerrado",
          link: "#"
        },
        {
          title: "Seguridad y garantía",
          link: "#"
        }
      ]
    },
    {
      title: "Profesionales",
      children: [
        {
          title: "Jobin para profesionales",
          link: "#"
        },
        {
          title: "Tarifas",
          link: "#"
        }
      ]
    },
    {
      title: "Soporte",
      children: [
        {
          title: "Ayuda",
          link: "#"
        },
        {
          title: "Garantía",
          link: "#"
        },
        {
          title: "Términos de uso",
          link: "#"
        },
        {
          title: "Políticas de privacidad",
          link: "#"
        },
        {
          title: "Contacta con nosotros",
          link: "#"
        }
      ]
    }
  ];

const socialNavItems = [
    {   link: "#",
        Icon: FacebookIcon
    },
    {   
        link: "#",
        Icon: TwitterIcon
    },
    {   
        link: "#",
        Icon : InstagramIcon
    }
]

storiesOf("Navigation|Footer", module)
    .add("Footer", () => (
        <Footer
        items={footerItems}
        copyright="© 2016-2019 Jobin App S.L. Todos los derechos reservados"
        social={socialNavItems} />
    ));