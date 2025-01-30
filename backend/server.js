const express = require("express")
const bodyParser = require("body-parser")
const cors = require("cors")
const mongoose = require("mongoose")
const path = require("path")

const app = express()
const PORT = 5000

// Connect to MongoDB
mongoose
  .connect("mongodb://localhost:27017/college", 
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  })

  .then(() => 
    console.log("Connected to MongoDB"))

  .catch((err) => 
    console.error("MongoDB connection error:", err))

// MongoDB Model
const userSchema = new mongoose.Schema
({
  name: String,
  fathername: String,
  course: String,
  registerno: Number, 
  department: String, 
  accept:String,
})

const User = mongoose.model("Stud", userSchema)

// Middleware
app.use(bodyParser.json())
app.use(cors())

// form submission
app.post("/submit", async (req, res) => 
{
  const { name, fathername, course, registerno, department } = req.body
  console.log(req)

  try 
  {
    const newUser = new User
    ({
      name,
      fathername,
      course,
      registerno,
      department,
      
    })

    const savedUser = await newUser.save()

    res.status(201).json
    ({
      message: "Form submitted and data saved to MongoDB successfully!",
      data: savedUser,
    })
  }
  
  catch (error) 
  {
    console.error("Error saving data to MongoDB:", error)
    res.status(500).json({ message: "Error saving data", error })
  }
})

// create
app.get("/users", async (req, res) => 
{
    try 
    {
       const users = await User.find()
       res.status(200).json(users)
    } 

    catch (error) 
    {
       console.error("Error fetching users:", error)
       res.status(500).json({ message: "Error fetching users", error })
    }
})

//update
app.put("/users/:id", async (req, res) => 
{
  const { id } = req.params
  const { name, fathername, course, registerno, department, accept } = req.body
  console.log(accept,id)

  try 
  {
    const updatedUser = await User.findByIdAndUpdate
    (
      id,
      { name, fathername, course, registerno, department, accept },
      { new: true } 
    )

    if (!updatedUser) 
    {
      return res.status(404).json({ message: "User not found" })
    }

      res.status(200).json
      ({
        message: "User updated successfully",
        data: updatedUser,
      })
  } 
  catch (error) 
  {
    console.error("Error updating user:", error)
    res.status(500).json({ message: "Error updating user", error })
  }
})

//stud login
app.post("/Stud_login", async(req, res) => 
{
    console.log("*************")
  console.log(req.body)
  const { name, registerno } = req.body

  console.log(name,registerno)
  const users = await User.find()
  console.log(users)
 let a=0;
  // Check if name exists and registerno matches
  for (let item of users)
  {
    console.log(item.name,name,item.registerno,registerno)
    if (item.name === name && item.registerno == registerno) 
    {

        console.log("login success")
      res.status(200).json({ message: "Login successful" })
     a=1
    }
  }

  if (a==0) 
  {
      
      console.log("none123")
    res.status(401).json({ message: "Invalid credentials", success: false })
  }
})


// Start the server
app.listen(PORT, () => 
{
  console.log(`Server is running on http://localhost:${PORT}`)
})
