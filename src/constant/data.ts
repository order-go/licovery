import type { IconType } from "react-icons";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
}

export interface Category {
  id: number;
  name: string;
  products: Product[];
}
export interface PayDates {
  bank: string;
  code: string;
  cedula: string;
  phone: string;
}
export interface ContactItem {
  name: string;
  link: string;
  icon: IconType;
}
const data: {
  categories: Category[];
  paydates: PayDates;
  contactData: ContactItem[];
} = {
  categories: [
    {
      id: 1,
      name: "Whisky",
      products: [
        {
          id: 1,
          title: "Whisky's",
          price: 5.99,
          images: [
            "/licovery/Whisky/whisky1.jpg",
            "/licovery/Whisky/whisky2.jpg",
            "/licovery/Whisky/whisky3.jpg",
          ],
          description:
            "El whisky es una bebida alcohólica destilada hecha de granos fermentados, como cebada, maíz, centeno o trigo, que se fermenta, se destila y se envejece en barricas de madera para desarrollar su sabor característico.",
        },
      ],
    },
    {
      id: 2,
      name: "Vodka",
      products: [
        {
          id: 1,
          title: "Vodka",
          price: 2.99,
          images: [
            "/licovery/vodka/vodka1.jpg",
            "/licovery/vodka/vodka 2.jpg",
            "/licovery/vodka/vodka3.jpg",
          ],
          description:
            "El vodka es una bebida alcohólica clara y suave, destilada a partir de granos o patatas, con un sabor neutro y alta pureza.",
        },
      ],
    },
    {
      id: 3,
      name: "Cervezas",
      products: [
        {
          id: 1,
          title: "Cerveza Corona",
          price: 0.99,
          images: [
            "/licovery/cervezas/corona1.jpg",
            "/licovery/cervezas/corona2.jpg",
            "/licovery/cervezas/corona3.jpg"
          ],
          description:
            "Una cerveza lager mexicana, conocida por su sabor ligero y refrescante. Se suele servir con una rodaja de limón o lima en el cuello de la botella.",
        },
        {
          id: 2,
          title: "Cerveza Heineken",
          price: 1.49,
          images: [
            "/licovery/cervezas/heinek1.jpg",
            "/licovery/cervezas/heinek2.jpg",
            "/licovery/cervezas/heinek3.jpg",
            "/licovery/cervezas/heinek4.jpg",
          ],
          description:
            "De origen holandés, reconocida por su sabor balanceado y ligeramente amargo. Es una de las cervezas más populares y se distingue por su botella verde y etiqueta roja.",
        },
      ],
    },
    {
      id: 4,
      name: "salchipapas",
      products: [
        {
          id: 1,
          title: "Salchipapas",
          price: 4.99,
          images: [
            "/licovery/salchipapa/salchipapas.jpg",
            "/licovery/salchipapa/salchipapas2.jpg",
          ],
          description:
            "Combo de salchicas picadas papas fritas combinadas con salsas al gusto, queso amarillo, jamon y tocineta.",
        },
      ],
    },
    {
      id: 5,
      name: "combos",
      products: [
        {
          id: 1,
          title: "Combo 2 personas",
          price: 4.99,
          images: ["/licovery/combos/combofamiliar.jpg"],
          description:
            "Combo para dos personas dos perros calientes, 2 racion de pollo y papas fritas mas 2 jugos naturales.",
        },
        {
          id: 2,
          title: "Papas fritas",
          price: 2.99,
          images: ["/licovery/combos/papasfritas.jpg"],
          description:
            "Racion extensa de papas fritas con salsa tartara para abrir el apetito.",
        },
      ],
    },
    {
      id: 6,
      name: "Bebidas",
      products: [
        {
          id: 1,
          title: "Coca Cola 1Lts",
          price: 0.99,
          images: [
            "/licovery/bebidas/CocaCola.jfif",
            "/licovery/bebidas/Coca-Cola2.jfif",
            "/licovery/bebidas/Coca-Cola3.jfif",
          ],
          description:
            "Bebida Coca-Cola de 1Lt perfecta para acompañar tus pedidos en pareja.",
        },
        {
          id: 2,
          title: "Vaso Coca Cola",
          price: 0.5,
          images: [
            "/licovery/bebidas/basoCoca.jpg",
            "/licovery/bebidas/Coca-Cola2.jfif",
          ],
          description:
            "Bebida Coca-Cola  perfecta para acompañar tus pedidos individuales.",
        },
        {
          id: 3,
          title: "Batido de cambur",
          price: 0.99,
          images: ["/licovery/bebidas/batidocambur.jpg"],
          description: "Delicioso batido de cambur muy nutritivo y natural.",
        },
        {
          id: 4,
          title: "Batido de naranja",
          price: 0.99,
          images: ["/licovery/bebidas/batidosabroso.jpg"],
          description:
            "Jugo de naranja para los amantes del citrico, altos valores de vitamina C.",
        },
      ],
    },
  ],
  paydates: {
    bank: "Venezuela",
    code: "0102",
    cedula: "29772298",
    phone: "04125026472",
  },
  contactData: [
    {
      name: "Instagram @Licovery",
      link: "https://www.instagram.com/licoverymcy",
      icon: FaInstagram,
    },
    {
      name: "WhatsApp Licovery",
      link: "https://wa.me/4125026472",
      icon: FaWhatsapp,
    },
  ],
};

export default data;
