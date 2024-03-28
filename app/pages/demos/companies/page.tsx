
'use client'

import CompanyColumns from "@/app/organisms/columns/company-columns"
import CompanyRows from "@/app/organisms/rows/company-rows"



export default function Companies() {
    return (
        <>
            <h3>Company</h3>

            <table>
                <thead>
                <tr>
                    <th>Company</th>
                    <th>Contact</th>
                    <th>Country</th>
                </tr>
                </thead>
                <tbody>
                {CompanyRows().map(v => CompanyColumns(v))}
                </tbody>
            </table>
        </>

    )
}