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
export interface DeliveryOptions {
  name: string;
  fee: number;
}
const data: {
  categories: Category[];
  paydates: PayDates;
  contactData: ContactItem[];
  deliveryOptions: DeliveryOptions[];
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
      name: "Espumantes",
      products: [
        {
          id: 1,
          title: "Espumantes",
          price: 3.99,
          images: [
            "/licovery/espumas/espuma1.jpg",
            "/licovery/espumas/espuma2.jpg",
          ],
          description:
            "Se caracteriza por su efervescencia natural. Se elaboran a partir de variedades de uva específicas y son populares en celebraciones y eventos especiales.",
        },
      ],
    },
    {
      id: 5,
      name: "Cocktail's",
      products: [
        {
          id: 1,
          title: "Cocktail's",
          price: 0.99,
          images: ["/licovery/cocktails/cocktail1.jpg",
          "/licovery/cocktails/cocktail2.jpg",
          "/licovery/cocktails/cocktail3.jpg",],

          description:
            "Bebidas mezcladas que combinan diferentes tipos de licores con ingredientes, como jugos, sodas, frutas y hierbas, crean sabores únicos y variados.",
        },
      ],
    },
    {
      id: 6,
      name: "Vinos",
      products: [
        {
          id: 1,
          title: "Vinos",
          price: 4.99,
          images: [
            "/licovery/vinos/vino1.jpg",
            "/licovery/vinos/vino2.jpg",
          ],
          description:
            "Bebida alcohólica hecha por la fermentación del jugo de uvas. Su sabor y aroma varían según las uvas usadas y el método de producción. Es apreciado por su capacidad para complementar comidas y su importancia cultural.",
        },
      ],
    },
    {
      id: 7,
      name: "Snacks",
      products: [
        {
          id: 1,
          title: "Snacks",
          price: 0.49,
          images: [
            "/licovery/snacks/snack1.jpg",
            "/licovery/snacks/snack2.jpg",
            "/licovery/snacks/snack3.jpg",
          ],
          description:
            "Los snacks son alimentos ligeros y rápidos de consumir, perfectos para acompañar bebidas alcohólicas",
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
  deliveryOptions: [
    { name: "Caña de Azucar", fee: 0 },
    { name: "El Limon", fee: 2 },
    { name: "San Vicente", fee: 3 },
  ],
};

export default data;
