"use client";

import ReactLenis from "lenis/react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import HeroBillboard from "@/components/sections/hero/HeroBillboard";
import TextAbout from "@/components/sections/about/TextAbout";
import ProductCardOne from "@/components/sections/product/ProductCardOne";
import MetricCardFourteen from "@/components/sections/metrics/MetricCardFourteen";
import TestimonialCardTen from "@/components/sections/testimonial/TestimonialCardTen";
import FeatureCardSixteen from "@/components/sections/feature/FeatureCardSixteen";
import ContactText from "@/components/sections/contact/ContactText";
import FooterLogoReveal from "@/components/sections/footer/FooterLogoReveal";
import { Utensils, MapPin, Clock, Star } from "lucide-react";

export default function VillaBurgerPage() {
    return (
        <ThemeProvider
            defaultButtonVariant="icon-arrow"
            defaultTextAnimation="background-highlight"
            borderRadius="soft"
            contentWidth="medium"
            sizing="mediumLarge"
            background="floatingGradient"
            cardStyle="glass-elevated"
            primaryButtonStyle="shadow"
            secondaryButtonStyle="layered"
            headingFontWeight="bold"
        >
            <ReactLenis root>
                <div id="nav" data-section="nav">
                    <NavbarLayoutFloatingInline
                        brandName="Villa Burger"
                        navItems={[
                            { name: "Cardápio", id: "menu" },
                            { name: "Sobre", id: "about" },
                            { name: "Avaliações", id: "testimonials" },
                            { name: "Local", id: "contact" }
                        ]}
                        button={{ text: "Fazer Pedido", href: "https://villaburguerinterlagos.saipos.com" }}
                    />
                </div>

                <div id="hero" data-section="hero">
                    <HeroBillboard
                        title="Villa Burger Interlagos"
                        description="Hamburgueria artesanal com sabor irresistível, feita por empreendedoras apaixonadas em Hortolândia."
                        background={{ variant: "sparkles-gradient" }}
                        tag="Hamburgueria Artesanal"
                        tagIcon={Utensils}
                        imageSrc="http://img.b2bpic.net/free-photo/black-burger-with-beef-tomato-bell-peppers-lettuce-pickled-cucumber_140725-5733.jpg"
                        buttons={[
                            { text: "Ver Cardápio", href: "https://villaburguerinterlagos.saipos.com" },
                            { text: "Peça Agora", href: "https://wa.me/5519998011043" }
                        ]}
                    />
                </div>

                <div id="about" data-section="about">
                    <TextAbout
                        title="Um espaço aconchegante, familiar e feito por mãos femininas que amam transformar ingredientes em experiências inesquecíveis."
                        useInvertedBackground={false}
                    />
                </div>

                <div id="menu" data-section="menu">
                    <ProductCardOne
                        title="Nosso Cardápio"
                        description="Hambúrgueres generosos, suculentos e com qualidade premium, de R$ 20 a R$ 40."
                        gridVariant="three-columns-all-equal-width"
                        animationType="slide-up"
                        textboxLayout="default"
                        products={[
                            { id: "1", name: "Villa Clássico", price: "R$ 25", imageSrc: "http://img.b2bpic.net/free-photo/meat-burger-wooden-board-lettuce-tomato-cheese-french-fries-ketchup-side-view_141793-3157.jpg" },
                            { id: "2", name: "Burger da Casa", price: "R$ 32", imageSrc: "http://img.b2bpic.net/front-view-burger-with-fried-egg-cutting-board_23-2148784523.jpg" },
                            { id: "3", name: "Combo Artesanal", price: "R$ 38", imageSrc: "http://img.b2bpic.net/classic-home-made-cheesburgers-black-plate-background-fries-fast-food-unhealthy-snack_482257-28911.jpg" }
                        ]}
                    />
                </div>

                <div id="impact" data-section="impact">
                    <MetricCardFourteen
                        title="Por que nos escolher?"
                        tag="Qualidade Garantida"
                        metrics={[
                            { id: "1", value: "5.0", description: "Avaliação média no Google (23 avaliações)" },
                            { id: "2", value: "18h", description: "Abertura diária para seu jantar especial" },
                            { id: "3", value: "3", description: "Modalidades: Local, Retirada ou Delivery" }
                        ]}
                        metricsAnimation="slide-up"
                        useInvertedBackground={true}
                    />
                </div>

                <div id="testimonials" data-section="testimonials">
                    <TestimonialCardTen
                        title="O que dizem nossos clientes"
                        textboxLayout="default"
                        useInvertedBackground={true}
                        testimonials={[
                            { id: "1", title: "Sabor incrível", quote: "Atendimento maravilhoso, ambiente familiar, os lanches um espetáculo nota 1000", name: "Cliente Google", role: "Local" },
                            { id: "2", title: "Irresistível", quote: "Lanche maravilhoso, sabor irresistível. Super indico! Voltarei mais vezes.", name: "Cliente Google", role: "Local" },
                            { id: "3", title: "Generoso", quote: "Hambúrguer bem generoso e tão grande quanto nas fotos!", name: "Cliente Google", role: "Delivery" },
                            { id: "4", title: "Recomendo 100%", quote: "Pedi pela 99food e recomendo 100%! Lanche muito saboroso, valeu muito a pena.", name: "Cliente Google", role: "Delivery" },
                            { id: "5", title: "Espaço lindo", quote: "Muito bom, amei. O lanche estava maravilhoso, espaço lindo e aconchegante.", name: "Cliente Google", role: "Local" }
                        ]}
                    />
                </div>

                <div id="comparison" data-section="comparison">
                    <FeatureCardSixteen
                        title="Diferenciais Villa Burger"
                        textboxLayout="default"
                        animationType="blur-reveal"
                        negativeCard={{ items: ["Fast food industrial", "Ambiente impessoal", "Sabor padronizado", "Sem cuidado artesanal"] }}
                        positiveCard={{ items: ["Hamburgueria artesanal", "Ambiente aconchegante", "Sabor único e autêntico", "Feito com paixão"] }}
                    />
                </div>

                <div id="contact" data-section="contact">
                    <ContactText
                        text="Estamos na Rua Rio Guaiba, 194 - Jardim Interlagos, Hortolândia - SP. Oferecemos Atendimento no Local e Delivery - venha nos visitar ou peça o seu!"
                        background={{ variant: "sparkles-gradient" }}
                        buttons={[
                            { text: "Ver no Google Maps", href: "https://maps.google.com/?q=Rio+Guaiba,+194+-+Jardim+Interlagos,+Hortolândia" },
                            { text: "WhatsApp", href: "https://wa.me/5519998011043" }
                        ]}
                        useInvertedBackground={true}
                    />
                </div>

                <div id="footer" data-section="footer">
                    <FooterLogoReveal
                        logoText="Villa Burger"
                        leftLink={{ text: "Cardápio Online", href: "https://villaburguerinterlagos.saipos.com" }}
                        rightLink={{ text: "Linktree", href: "https://linktr.ee" }}
                    />
                </div>
            </ReactLenis>
        </ThemeProvider>
    );
}
