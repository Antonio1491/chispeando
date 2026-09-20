import React from 'react';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import TikTokIcon from './icons/TikTokIcon';

const Footer = () => {
    return (
        <footer className="bg-primary-dark text-white pt-16 pb-8 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <span className="text-3xl font-heading font-bold text-white">
                                Chispeando<span className="text-accent">Ideas</span>
                            </span>
                        </div>
                        <p className="text-gray-300 max-w-sm mb-6">
                            Escuela extracurricular de ciencia y tecnología. Formando a los próximos líderes, innovadores y creadores de México.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary-dark transition-colors">
                                <TikTokIcon size={18} />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Enlaces Rápidos</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-accent transition-colors">Inicio</a></li>
                            <li><a href="#cada-nino" className="text-gray-300 hover:text-accent transition-colors">Nuestra Metodología</a></li>
                            <li><a href="#programas" className="text-gray-300 hover:text-accent transition-colors">Cursos STEAM</a></li>
                            <li><a href="#porque-nosotros" className="text-gray-300 hover:text-accent transition-colors">Beneficios</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6">Contacto</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-300">
                                <MapPin size={20} className="text-accent shrink-0 mt-1" />
                                <span>Mérida, Yucatán, México</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Phone size={20} className="text-accent shrink-0" />
                                <span>999 451 9579</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-300">
                                <Mail size={20} className="text-accent shrink-0" />
                                <span>hola@chispeandoideas.mx</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left text-gray-400 text-sm">
                    <p>&copy; {new Date().getFullYear()} Chispeando Ideas. Todos los derechos reservados.</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:text-white transition-colors">Aviso de Privacidad</a>
                        <a href="#" className="hover:text-white transition-colors">Términos de Servicio</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
