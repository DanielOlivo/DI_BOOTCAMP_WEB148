import './style.css'
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
import RecipeCollection from './model/RecipeCollection.ts'
import init from './init.ts'
import RecipeTemplate from './template/RecipeTemplate.ts'
import AddField from './template/AddField.ts'

const app = document.querySelector<HTMLDivElement>('#app')

const initApp = (): void => {
  const collection = new RecipeCollection(init)
  const template = new RecipeTemplate()
  const field = new AddField(item => {
    collection.add(item)
    template.render(collection)
  })

  template.render(collection)
}


initApp()
