export default {                                                                                                                                                               
    async fetch(request) {                                                                                                                                                       
      const userAgent = request.headers.get("user-agent") || "";                                                                                                                 
      const ip = request.headers.get("cf-connecting-ip") || "";                                                                                                                  
                                                                                                                                                                                 
      const botUAs = [                        
        "facebookexternalhit", "facebot", "facebookbot", "adsbot",                                                                                                               
        "googlebot", "bingbot", "twitterbot", "linkedinbot", "slackbot",
        "whatsapp", "telegrambot", "crawler", "spider", "headless",                                                                                                              
        "phantom", "python", "curl", "wget", "java/", "apache-httpclient"                                                                                                      
      ];                                                                                                                                                                         
      const metaIPs = [                                                                                                                                                          
        "66.220.", "69.63.", "69.171.", "173.252.",                                                                                                                              
        "31.13.", "157.240.", "179.60.", "204.15."                                                                                                                               
      ];                                                                                                                                                                         
                                                                                                                                                                                 
      const isBot = botUAs.some((b) => userAgent.toLowerCase().includes(b));                                                                                                     
      const isMeta = metaIPs.some((p) => ip.startsWith(p));                                                                                                                      
                                                                                                                                                                                 
      if (isBot || isMeta) {                                                                                                                                                     
        return new Response(null, {                                                                                                                                            
          status: 302,                                                                                                                                                           
          headers: { Location: "https://grupojogadorcaro.com.br/quem-e-ramon" }                                                                                                  
        });                                   
      }                                                                                                                                                                          
                                                                                                                                                                               
      const numeros = [                                                                                                                                                          
        //"5531936180416", // R02         
        //"5531936184888", // R06                                                                                                                                                
        //"5531936180517", // R03                                                                                                                                                
        //"5531936184864", // R07
        //"5531936184868", // R08                                                                                                                                                
        //"5531936181644", // R05                                                                                                                                              

        "5531936184874", // R09                                                                                                                                                  
        "5531936183394", // R14
        "5531936183525", // R15                                                                                                                                                  
        "5531936184875", // R10                                                                                                                                                
        "5531936184904", // R16           
        "5531936184905", // R17
        "5531936184907", // R18                                                                                                                                                  
      ];                                      
                                                                                                                                                                                 
      const mensagens = [                                                                                                                                                      
        "Ramon, envia a braba de hoje que eu quero entrar!",                                                                                                                     
        "Fala Ramon, envia a braba pra eu entrar hoje.",
        "E aí Ramon, envia a braba que hoje eu quero entrar!",                                                                                                                   
        "Ramon, quero entrar hoje, envia a braba aí!",                                                                                                                         
        "Ramon, envia a braba que eu tô querendo entrar hoje!",                                                                                                                  
        "E aí Ramon, envia a braba aí que quero entrar junto!",                                                                                                                  
        "Ramon, hoje eu quero entrar, envia a braba!",                                                                                                                           
        "Fala Ramon, envia a braba pra mim que quero entrar hoje.",                                                                                                              
        "Ramon, envia a braba aí porque eu quero entrar hoje!"                                                                                                                   
      ];                                                                                                                                                                         
                                                                                                                                                                                 
      const numero = numeros[Math.floor(Math.random() * numeros.length)];                                                                                                        
      const mensagem = encodeURIComponent(                                                                                                                                     
        mensagens[Math.floor(Math.random() * mensagens.length)]                                                                                                                  
      );                                                                                                                                                                         
                                          
      const url = /Android|iPhone|iPad/i.test(userAgent)                                                                                                                         
        ? `whatsapp://send?phone=${numero}&text=${mensagem}`                                                                                                                     
        : `https://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`;
                                                                                                                                                                                 
      return new Response(null, {                                                                                                                                              
        status: 302,                                                                                                                                                             
        headers: { Location: url }                                                                                                                                             
      });                                                                                                                                                                        
    },
  };                                                                                                                                                                             
    
