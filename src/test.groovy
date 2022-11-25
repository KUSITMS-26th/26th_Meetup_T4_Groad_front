import static net.grinder.script.Grinder.grinder 
import static org.junit.Assert.*
import static org.hamcrest.Matchers.*
import net.grinder.script.GTest
import net.grinder.script.Grinder
import net.grinder.scriptengine.groovy.junit.GrinderRunner
import net.grinder.scriptengine.groovy.junit.annotation.BeforeProcess
import net.grinder.scriptengine.groovy.junit.annotation.BeforeThread
// import static net.grinder.util.GrinderUtils.* // You can use this if you're using nGrinder after 3.2.3 import org.junit.Before
import org.junit.BeforeClass
import org.junit.Test
import org.junit.runner.RunWith

import org.ngrinder.http.HTTPRequest
import org.ngrinder.http.HTTPRequestControl 
import org.ngrinder.http.HTTPResponse
import org.ngrinder.http.cookie.Cookie
import org.apache.commons.lang.RandomStringUtils

import org.ngrinder.http.cookie.CookieManager 
import java.util.Random
import java.time.LocalDateTime

@RunWith(GrinderRunner) 
class TestRunner {
  
  public static GTest testRecord1 
  public static GTest testRecord2 
  public static GTest testRecord3 
  public static GTest testRecord4 
  public static GTest testRecord5 
  public static GTest testRecord6
  public static GTest testRecord7 
  public static GTest testRecord8
  public static GTest testRecord9 
  public static GTest testRecord10 
  public static GTest testRecord11 
  public static GTest testRecord12 
  public static GTest testRecord13
  
  public static HTTPRequest request = new HTTPRequest() 
  public Map<String, String> headers = [:]
  public Map<String, Object> params = [:]
  public List<Cookie> cookies = []
  public Cookie cookie 
  public Long temp
  
  @BeforeProcess
  public static void beforeProcess() {
    HTTPRequestControl.setConnectionTimeout(300000) 
    testRecord1 = new GTest(1, "15.165.249.162") 
    testRecord2 = new GTest(2, "15.165.249.162") 
    testRecord3 = new GTest(3, "15.165.249.162") 
    testRecord4 = new GTest(4, "15.165.249.162") 
    testRecord5 = new GTest(5, "15.165.249.162") 
    testRecord6 = new GTest(6, "15.165.249.162") 
    testRecord7 = new GTest(7, "15.165.249.162") 
    testRecord8 = new GTest(8, "15.165.249.162") 
    testRecord9 = new GTest(9, "15.165.249.162") 
    testRecord10 = new GTest(10, "15.165.249.162") 
    testRecord11 = new GTest(11, "15.165.249.162") 
    testRecord12 = new GTest(12, "15.165.249.162") 
    testRecord13 = new GTest(13, "15.165.249.162") 
    grinder.logger.info("before process.")
}
  
  @BeforeThread
  public void beforeThread() {
    testRecord1.record(this, "test01") 
    testRecord2.record(this, "test02")
    testRecord3.record(this, "test03")
    testRecord4.record(this, "test04")
    testRecord5.record(this, "test05")
    testRecord6.record(this, "test06")
    testRecord7.record(this, "test07")
    testRecord8.record(this, "test08")
    testRecord9.record(this, "test09") 
    testRecord11.record(this, "test11") 
    testRecord10.record(this, "test10")
    testRecord12.record(this, "test12")
    testRecord13.record(this, "test13")
    grinder.statistics.delayReports = true
    grinder.logger.info("before thread.")
}
  
  @Before
  public void before() {
    request = new HTTPRequest()
    request.setHeaders(headers)
    CookieManager.addCookies(cookies) 
    grinder.logger.info("before. init headers and cookies")
}
  
// 1.로그인 - 2. 이력서 게시판 - 3. 후기 게시판 - 4. 후기 작성 - 5. 메인 페이지 - 6. 후기 수정
  
  @Test
  public void test01() {
    grinder.logger.info("test1")
    String url1 = "http://15.165.249.162:9191/login";
    
    HTTPResponse response = request.GET(url1, params)
    
    if (response.statusCode == 301 || response.statusCode == 302) {
      grinder.logger.warn("Warning. The response may not be correct. The response code was {}.", response.statusCode)
    } else {
      assertThat(response.statusCode, is(200))
    } 
  }
  
  @Test
  public void test02() {
    grinder.logger.info("test2")
    String url = "http://15.165.249.162:9191/resume";
    
    HTTPResponse response = request.GET(url, params)
    
    if (response.statusCode == 301 || response.statusCode == 302) {
      grinder.logger.warn("Warning. The response may not be correct. The response code was {}.", response.statusCode)
    } else {
      assertThat(response.statusCode, is(200)) 
    }
  }

  
  @Test
  public void test03() {
    grinder.logger.info("test3")
    String url = "http://15.165.249.162:9191/resume";
    
    HTTPResponse response = request.GET(url, params)
    
    if (response.statusCode == 301 || response.statusCode == 302) {
      grinder.logger.warn("Warning. The response may not be correct. The response code was {}.", response.statusCode)
    } else {
      assertThat(response.statusCode, is(200))
    }
  }
  
  @Test
  public void test04() {
    grinder.logger.info("test4")
    String url = "http://15.165.249.162:9191/review/write";
    String body = "{
      "content": " 
      "title": "개발", 
      "category": "개발", 
      "mapDelete": "NO"
    }";
  
    grinder.logger.info(body);
    HTTPResponse response = request.POST(url, body.getBytes())
  
    if (response.statusCode == 301 || response.statusCode == 302) {
       grinder.logger.warn("Warning. The response may not be correct. The response code was {}.", response.statusCode)
    } else {
      assertThat(response.statusCode, is(200))
    } 
  }

  @Test
  public void test06() {
    grinder.logger.info("test6")
    String url = "http://15.165.249.162:9191/review/"
    String reviewId = 1;
    String body = "{
      "title": "개발",
      "content": "개발",
      "category": "개발",
      "mapDelete": "NO"
    }";
    grinder.logger.info(body)
    HTTPResponse response = request.PUT(url, body.getBytes()) 

    if (response.statusCode == 301 || response.statusCode == 302) {
      grinder.logger.warn("Warning. The response may not be correct. The response code was {}.", response.statusCode)
    } else {
      assertThat(response.statusCode, is(200))
    }
  }

  
  

  


  
  

  
  


