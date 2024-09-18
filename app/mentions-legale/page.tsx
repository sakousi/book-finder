export default function Page() {
    return (
        <div
            className="container">
            <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
                <h1 className="text-4xl">Mentions Légales</h1>

                <div className="flex sm:flex-col gap-4 flex-row">
                    <h2 className="text-2xl">Éditeur du site :</h2>
                    <p>Book-Finder<br/>
                        [Nom de l'entreprise ou de l'éditeur]<br/>
                        [Adresse complète]<br/>
                        [Téléphone]<br/>
                        [Email]</p>
                </div>

                <div className="flex sm:flex-col gap-4 flex-row">

                    <h2 className="text-2xl">Directeur de la publication :</h2>
                    <p>[Nom du directeur de la publication]</p>
                </div>
                <div className="flex sm:flex-col gap-4 flex-row">

                    <h2 className="text-2xl">Hébergement :</h2>
                    <p>[Nom de l'hébergeur]<br/>
                        [Adresse de l'hébergeur]<br/>
                        [Téléphone de l'hébergeur]</p>
                </div>
                <div className="flex sm:flex-col gap-4 flex-row">

                    <h2 className="text-2xl">Propriété intellectuelle :</h2>
                    <p>Le site Book-Finder et l’ensemble de son contenu (textes, images, logos, etc.) sont la propriété
                        exclusive de [Nom de l'entreprise ou de l'éditeur]. Toute reproduction, représentation ou
                        exploitation,
                        totale ou partielle, de ce site ou de son contenu est interdite sans autorisation préalable.</p>
                </div>
                <div className="flex sm:flex-col gap-4 flex-row">

                    <h2 className="text-2xl">Données personnelles :</h2>
                    <p>Conformément à la loi [nom de la loi applicable, par exemple la RGPD en Europe], vous disposez
                        d’un
                        droit
                        d’accès, de modification, de rectification et de suppression des données vous concernant. Pour
                        exercer
                        ce
                        droit, veuillez nous contacter à l’adresse suivante : [Email].</p>
                </div>
                <div className="flex sm:flex-col gap-4 flex-row">

                    <h2 className="text-2xl">Cookies :</h2>
                    <p>Ce site utilise des cookies pour améliorer votre expérience. Vous pouvez choisir de désactiver
                        les

                        cookies dans les paramètres de votre navigateur.</p>
                </div>

                <div className="flex sm:flex-col gap-4 flex-row">
                    <h2 className="text-2xl">Responsabilité :</h2>
                    <p>Book-Finder s’efforce de fournir des informations précises et à jour. Cependant, nous ne
                        pouvons
                        garantir
                        l’exactitude, l'exhaustivité ou l'actualité des informations présentes sur ce site. En
                        conséquence,
                        nous
                        ne saurions être tenus responsables des erreurs ou omissions qui pourraient survenir.</p>

                </div>
                <div className="flex sm:flex-col gap-4 flex-row">
                    <h2 className="text-2xl">Loi applicable :</h2>
                    <p>Les présentes mentions légales sont régies par la loi [préciser la loi applicable, par
                        exemple,
                        la
                        loi
                        française]. Tout litige relatif à l’utilisation du site sera soumis à la compétence des
                        tribunaux
                        [préciser le lieu].</p>
                </div>

            </main>
        </div>
    );
}