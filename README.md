# frontend-theWellnessAdventure

## Integración con el Backend
Para este proyecto se utilizó el servicio de [Supabase](https://supabase.com) como backend.

La documentación sobre como conectar una app de React con Supabase puede encontrarla en los siguientes enlaces:
- [Instalación y Setup](https://supabase.com/docs/reference/javascript/installing)
- Consultas a la base de datos:
    - [SELECT](https://supabase.com/docs/reference/javascript/select)
    - [INSERT](https://supabase.com/docs/reference/javascript/insert)
    - [UPDATE](https://supabase.com/docs/reference/javascript/update)
    - [DELETE](https://supabase.com/docs/reference/javascript/delete)

### Variables de entorno
Para instanciar un cliente de supabase es necesario suministrarle dos valores: La Url de la API ya API Key. Ambos valores son otorgados
por el dashboard administrativo del proyecto de supabase.

Por motivos prácticos puede ingresar esos valores en el proyecto mediante un archivo de variables de entorno(.env). Pasos:

1. Copie las variables de entorno en el archivo [.env.example](.env.example) en un nuevo archivo .env
2. Inserte los valores de la url y la API Key despues de cada '='. Ejemplo:

```shell
# .env file

VITE_SUPABASE_URL=https://remplace.this.value
VITE_SUPABASE_APIKEY=notTheRealAPIKEY
```

### Ejemplo de código
Un ejemplo sobre como usar el cliente de supabase.

```javascript
import {useState, useEffect} from 'react';
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'


const ComponenteEjemplo = () => {
    
    // creamos el estado
    const [planes, SetPlanes] = useState([])

    // Obtenemos las variables de entorno
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
    const supabaseApiKey = import.meta.env.VITE_SUPABASE_APIKEY

    // Inicializamos el cliente de supabase
    const supabaseClient = createClient(supabaseUrl, supabaseApiKey)

    // Creamos una funcion para obtener los planes
    const fetchPlanes = async () => {
        // SELECT * FROM retreat_plan
        const { data } = await supabaseClient.from("retreat_plan").select() 
        SetPlanes(data) // almacenamos los datos en el estado
    }

    useEffect(() => {
        
    }, [])

    return(
        <>
            <h1>Todos los planes</h1>
            {
                planes.length > 0
                ? planes.map(plan => {
                    return(
                        <>
                            <p>ID: {plan?.id}</p>
                            <p>Fecha inico: {plan?.fecha_inicio}</p>
                            <p>Fecha fin: {plan?.fecha_fin}</p>
                            <p>Status: {plan?.status}</p>
                        </>
                    )
                })
                : <></>
            }
        </>
    )
}
```
