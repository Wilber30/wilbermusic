<div class="font-Line">
  <form class="flex flex-col" action="post">
    <div id="response"></div>

    <div id="error"></div>

    <div class="flex">
      <input class="w-1/2" id="name" type="text" name="name" placeholder="Name:" required="required">

      <input class="w-1/2" id="email" name="email" type="text" placeholder="Email:" required="required">
    </div>
    <input id="subject" type="text" name="subject" placeholder="Subject" required="required">

    <textarea id="message" name="message" rows="8" cols="80" placeholder="Message:" required></textarea>

    <div>
      <button id="sub_btn" type="submit" name="Submit">Submit</button>
    </div>
  </form>
</div>