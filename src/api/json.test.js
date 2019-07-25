import {fetchName} from './json'

it('test',async () => {
    name = await fetchName()
    console.log(name)
});