import React from 'react'
import "./table.css";

export const Table = ({ people }: {people: any}) => {
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Height</th>
                        <th>Mass</th>
                        <th>Hair Color</th>
                        <th>Skin Color</th>
                        
                    </tr>
                </thead>

                <tbody>        
                    {people.results?.map((p: any, index: any) => {
                        return(
                            <tr key={index}>
                                <td>{p.name}</td>
                                <td>{p.height}</td>
                                <td>{p.mass}</td>
                                <td>{p.hair_color}</td>
                                <td>{p.skin_color}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    );
};