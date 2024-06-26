import { faker } from "@faker-js/faker"

const data = {
  interaction: [
    {
      text: "Can you help me with something",
      role: "user",
    },
    {
      text: "Sure, What do you need help with ?",
      role: "system",
    },
    {
      text: "How can I create a new account with Meaningful ?",
      role: "user",
    },
    {
      text: "Sure, go ahead to Register Page on the website",
      role: "system",
    },
    {
      url: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?q=80&w=2600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "asset",
    },
    {
      url: "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=3874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      role: "asset",
    },
  ],
  userName: "Micheal Scott",
}

const make_faker_data = () => {
  let data = []
  const max_datasets = faker.number.int({ min: 5, max: 20 })
  for (let i = 0; i < max_datasets; i++) {
    const role_decider = faker.number.int({ min: 1, max: 3 })
    let intermediate_data: any = {}

    if (role_decider === 1) {
      intermediate_data["role"] = "user"
      intermediate_data["text"] = faker.lorem.paragraph(1)
    } else if (role_decider === 2) {
      intermediate_data["role"] = "system"
      intermediate_data["text"] = faker.lorem.paragraph(1)
    } else {
      intermediate_data["role"] = "asset"
      intermediate_data["url"] = faker.image.url()
    }
    data.push(intermediate_data)
  }
  return { interaction: data }
}

const faker_data = make_faker_data()

export { faker_data, data }
