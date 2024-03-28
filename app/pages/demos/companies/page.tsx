
'use client'

interface ICompany{
    company : string,
    contact: string,
    country: string
}

const Company = (props: ICompany) => {
    return (
        <tr>
            <td>{props.company}</td>
            <td>{props.contact}</td>
            <td>{props.country}</td>
        </tr>
    );
};

export default function Companies() {

    const Companies = [
        {company : 'Alfreds Futterkiste',contact :'Maria Anders',country :'Germany' },
        {company : 'Centro comercial Moctezuma',contact :'Francisco Chang',country :'Mexico' },
        {company : 'Ernst Handel',contact :'Roland Mendel',country :'Austria' },
        {company : 'Island Trading',contact :'Helen Bennett',country :'UK' }
    ]
    
    const companyMap = Companies.map((v,i) => (<Company key={i} {...v} />))    

    return (
        <>
            <h3>Articles</h3>

            <table>
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                {companyMap}
                </tbody>
            </table>
        </>

    )
}