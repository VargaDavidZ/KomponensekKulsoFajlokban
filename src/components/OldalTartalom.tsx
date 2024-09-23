import './Felsorolas'
import { Felsorolas } from './Felsorolas'
import { Tablazat } from './Tablazat'
import { TobbSzoveg } from './TobbSzoveg'
import { LabResz } from './LabResz'

export function OldalTartalom()
{
    return(
        <div>
            {Felsorolas()}
            {Tablazat()}
            {TobbSzoveg()}
            {LabResz()}
        </div>
    )
}