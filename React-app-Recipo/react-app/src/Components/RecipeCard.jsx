import React from 'react'

const RecipeCard = () => {
  return (
    <div className='border-2 rounded-xl flex flex-col bg-white h-[460px] gap-5 p-6 relative border-gray-300 shadow-md hover:scale-105 active:scale-[1.02] duration-150'>
        <div className='bg-gradient-to-b rounded-xl from-transparent via-transparent to-white/90 absolute z-10 w-[90%] h-[90%] xl:h-[94%] '></div>
        <div className=' bg-orange-500 rounded-xl flex h-[200px] '>
            <p className='invisible'>t</p>
        </div>
        <h1 className='text-xl font-medium tracking-wide'>Recipe Name</h1>
        <div className='overflow-hidden h-[70%] '>
        <p >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum facilisis imperdiet felis, a pretium leo malesuada ut. Mauris imperdiet egestas tincidunt. Etiam eget leo mi. Nulla eu porttitor elit, et laoreet tellus. Etiam facilisis sem a erat ornare interdum. Sed pulvinar interdum ante, quis pharetra massa ultrices et. Etiam quam nunc, sodales vel ipsum a, varius placerat est. Proin sollicitudin ex eu nulla vehicula, vel dignissim nunc interdum. Pellentesque aliquam ut orci nec tempus. Fusce sodales feugiat quam fermentum luctus. Suspendisse fermentum leo sit amet nulla rutrum volutpat in at tortor. In id lobortis mauris. Maecenas eget enim at turpis vehicula accumsan. Quisque non accumsan ex. Morbi dapibus nunc vel pellentesque maximus.</p>
        <p >Aenean fringilla ante at gravida semper. Sed in faucibus lorem. Morbi dapibus imperdiet mi, id consequat elit posuere eget. Duis nec ligula tristique dui elementum dapibus sed sit amet metus. Integer sed nisi eu quam auctor efficitur. Vestibulum accumsan interdum tellus vitae posuere. Donec cursus, augue ac dignissim condimentum, ipsum velit lacinia elit, vel cursus ligula sapien quis ipsum. Integer a euismod ante, ut consectetur mi. Phasellus gravida ex sem, eget vestibulum nibh viverra nec. Nulla ut erat congue, consectetur purus non, pellentesque mi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mattis eget neque vel accumsan.</p>
        <p >Morbi faucibusnisl quis tempor volutpat. Nunc a posuere augue. Nulla laoreet tempor volutpat. Quisque quis ullamcorper ipsum. Morbi libero metus, congue ut ante in, dapibus condimentum ipsum. Morbi iaculis fermentum molestie. Nullam consectetur blandit dui vel molestie.</p>
        </div>
        
    </div>
  )
}

export default RecipeCard