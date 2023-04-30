<div class="flex flex-row justify-center font-Line">
  <form class="flex flex-col w-4/5">
    <div id="response"></div>

    <div id="error"></div>

    <div class="border-4 border-solid border-grey p-3 rounded-md bg-whitesmoke">
      <div class="flex !text-black">
        <input class="w-1/2 bg-whitesmoke" id="name" type="text" name="name" placeholder="Name:" required="required">

        <input class="w-1/2 bg-whitesmoke" id="email" name="email" type="text" placeholder="Email:" required="required">
      </div>
      <input id="subject" class="w-full mt-2 bg-whitesmoke" type="text" name="subject" placeholder="Subject" required="required">
    
      <textarea id="message" class="w-full mt-2 bg-whitesmoke" name="message" rows="8" cols="80" placeholder="Message:" required></textarea>
    </div>
    <div class="text-center">
      <button class="my-4" id="sub_btn" type="submit" name="Submit">Submit</button>
    </div>
  </form>
</div>