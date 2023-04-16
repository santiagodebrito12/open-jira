interface SeedData{
    entries: SeedEntry[];
}


interface SeedEntry{
    description:string;
    status:'pending' | 'progress' | 'completed';
    createdAt:number;
}




export const seedData:SeedData = {
    entries: [
        {
            
             description:'lorem ipsum',
             createdAt: Date.now(),
             status:'pending',
           },
           {
             
              description:'lorem ipsum',
              createdAt: Date.now(),
              status:'pending',
            },
            {
             
              description:'lorem ipsum',
              createdAt: Date.now(),
              status:'pending',
            },
            {
             
              description:'lorem ipsum',
              createdAt: Date.now(),
              status:'completed',
            },
            {
             
              description:'lorem ipsum',
              createdAt: Date.now(),
              status:'completed',
            },
            {
             
              description:'lorem ipsum',
              createdAt: Date.now(),
              status:'completed',
            },
            {
             
              description:'lorem ipsum',
              createdAt: Date.now(),
              status:'progress',
            },
            {
             
              description:'lorem ipsum',
              createdAt: Date.now(),
              status:'progress',
            }
    ]
}