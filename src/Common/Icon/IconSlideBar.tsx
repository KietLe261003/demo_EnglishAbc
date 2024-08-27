interface IconProps {
  width?: string,
  height?: string
}
export const IconHome: React.FC<IconProps>=({width="1.5em",height="1.5em"})=>{
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 17v-5.548c0-.534 0-.801-.065-1.05a2 2 0 0 0-.28-.617c-.145-.213-.345-.39-.748-.741l-4.8-4.2c-.746-.653-1.12-.98-1.54-1.104c-.37-.11-.764-.11-1.135 0c-.42.124-.792.45-1.538 1.102L5.093 9.044c-.402.352-.603.528-.747.74a2 2 0 0 0-.281.618C4 10.65 4 10.918 4 11.452V17c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C5.602 20 6.068 20 7 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C10 18.398 10 17.932 10 17v-1a2 2 0 1 1 4 0v1c0 .932 0 1.398.152 1.765a2 2 0 0 0 1.082 1.083C15.602 20 16.068 20 17 20s1.398 0 1.766-.152a2 2 0 0 0 1.082-1.083C20 18.398 20 17.932 20 17"
          ></path>
        </svg>
    );
}
export const IconLeaf: React.FC<IconProps>=({width="1.5em", height="1.5em"})=>{
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 256 256"
        >
          <path
            fill="currentColor"
            d="M223.45 40.07a8 8 0 0 0-7.52-7.52C139.8 28.08 78.82 51 52.82 94a87.1 87.1 0 0 0-12.76 49c.57 15.92 5.21 32 13.79 47.85l-19.51 19.5a8 8 0 0 0 11.32 11.32l19.5-19.51C81 210.73 97.09 215.37 113 215.94q1.67.06 3.33.06A86.93 86.93 0 0 0 162 203.18c43-26 65.93-86.97 61.45-163.11m-69.7 149.43c-22.75 13.78-49.68 14-76.71.77l88.63-88.62a8 8 0 0 0-11.32-11.32L65.73 179c-13.19-27-13-54 .77-76.71c22.09-36.47 74.6-56.44 141.31-54.06c2.39 66.66-17.59 119.18-54.06 141.27"
          ></path>
        </svg>
    );
}
export const IconBook: React.FC<IconProps>=({width="1.5em", height="1.5em"})=>{
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M7.345 2.634q.136.069.268.145L8 3l.387-.221q.133-.076.268-.145a6.7 6.7 0 0 1 6.052-.03c.486.242.793.74.793 1.283v8.938c0 .65-.526 1.175-1.175 1.175h-.04c-.187 0-.37-.05-.529-.146a4.8 4.8 0 0 0-4.61-.177l-.199.1A2.1 2.1 0 0 1 8 14h-.117a1.6 1.6 0 0 1-.726-.171l-.233-.117a4.94 4.94 0 0 0-4.748.183a.74.74 0 0 1-.381.105h-.12A1.175 1.175 0 0 1 .5 12.825V3.887c0-.544.307-1.04.793-1.284a6.7 6.7 0 0 1 6.052.03m1.405 9.572V4.3l.382-.218A5.2 5.2 0 0 1 14 3.927v8.357a6.3 6.3 0 0 0-5.25-.078m-1.5.005V4.299l-.382-.218A5.2 5.2 0 0 0 2 3.927v8.365a6.44 6.44 0 0 1 5.25-.082"
            clipRule="evenodd"
          ></path>
        </svg>
    );
}
export const IconVideo: React.FC<IconProps>=({width="1.5em", height="1.5em"})=>{
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            d="M2 6.25A3.25 3.25 0 0 1 5.25 3h13.5A3.25 3.25 0 0 1 22 6.25v11.5A3.25 3.25 0 0 1 18.75 21H5.25A3.25 3.25 0 0 1 2 17.75zM5.25 4.5A1.75 1.75 0 0 0 3.5 6.25v11.5c0 .966.784 1.75 1.75 1.75h13.5a1.75 1.75 0 0 0 1.75-1.75V6.25a1.75 1.75 0 0 0-1.75-1.75zM9 9.25v5.5a1 1 0 0 0 1.482.876l5-2.75a1 1 0 0 0 0-1.752l-5-2.75A1 1 0 0 0 9 9.251"
          ></path>
        </svg>
    );
}
export const IconDocument: React.FC<IconProps>=({width="1.5em", height="1.5em"})=>{
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M5.616 20q-.691 0-1.153-.462T4 18.384V5.616q0-.691.463-1.153T5.616 4h9.961L20 8.423v9.962q0 .69-.462 1.153T18.384 20zm0-1h12.769q.269 0 .442-.173t.173-.442V9h-4V5H5.616q-.27 0-.443.173T5 5.616v12.769q0 .269.173.442t.443.173M7.5 16h9v-1h-9zm0-7H12V8H7.5zm0 3.5h9v-1h-9zM5 5v4zv14z"
          ></path>
        </svg>
    );
}
export const IconUser: React.FC<IconProps>=({width="1.5em", height="1.5em"})=>{
    return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={width}
          height={height}
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 0 0-12 0zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6m0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4"
          ></path>
        </svg>
    );
}


